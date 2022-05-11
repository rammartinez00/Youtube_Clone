from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Video

video_routes = Blueprint('videos', __name__)

@video_routes.route('/')
def videos():
    videos = Video.query.all()
    return {'videos': [video.video_to_dict() for video in videos]}

@video_routes.route('/<int:id>')
def video(id):
    video = Video.query.get(id)
    return video.video_to_dict()