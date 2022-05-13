from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Video, db
from app.forms.video_form import VideoForm

from app.AWSUpload import (
    upload_file_to_s3, allowed_file, get_unique_filename
)

video_routes = Blueprint('videos', __name__)

@video_routes.route('/')
def videos():
    videos = Video.query.all()
    return {'videos': [video.video_to_dict() for video in videos]}

@video_routes.route('/<int:id>')
def video(id):
    video = Video.query.get(id)
    return video.video_to_dict()

@video_routes.route('/upload', methods=['GET','POST'])
@login_required
def upload():
    form = VideoForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if 'video' not in request.files:
            return jsonify({'errors': 'No file'}), 400
        
        video = request.files['video']

        if not allowed_file(video.filename):
            return jsonify({'errors': 'File extension not allowed'}), 400

        video.filename = get_unique_filename(video.filename)

        upload = upload_file_to_s3(video)

        if 'url' not in upload:
            return upload, 400

        url = upload['url']

    
        new_file = Video(userId=current_user.to_dict()['id'], 
                            video=url, title=form.title.data,about=form.about.data)
        db.session.add(new_file)
        db.session.commit()
        return new_file.video_to_dict()
    return jsonify({'errors': form.errors}), 400
    
