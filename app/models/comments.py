from .db import db
from sqlalchemy import ForeignKey
import datetime


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    videoId = db.Column(db.Integer, ForeignKey('videos.id'), nullable=False)
    userId = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    comment = db.Column(db.Text)
    created_at = db.Column('created_at', db.DateTime,
                           default=datetime.datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True),
                           onupdate=datetime.datetime.now)

    def comment_to_dict(self):
        return {
            'id': self.id,
            'videoId': self.videoId,
            'userId': self.userId,
            'comment': self.comment,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
