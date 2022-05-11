from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Comment, db
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:id>')
def comments(id):
    comments = Comment.query.filter(Comment.videoId == id).all()
    return {'comments': [comment.comment_to_dict() for comment in comments]}

@comment_routes.route('add/<int:id>', methods=['POST'])
@login_required
def add_comment(id):
    curr_user = current_user.to_dict()
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            videoId=id,
            userId=curr_user['id'],
            comment=form.comment.data
        )
        db.session.add(comment)
        db.session.commit()
        return jsonify(comment.comment_to_dict())
    return jsonify(form.errors)


    

    
