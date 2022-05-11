from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Comment

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:id>')
def comments(id):
    comments = Comment.query.filter(Comment.videoId == id).all()
    return {'comments': [comment.comment_to_dict() for comment in comments]}

# @comment_routes.route('add/<int:id>', methods=['POST'])
# @login_required
# def add_comment(id):
    
