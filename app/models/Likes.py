from sqlalchemy import ForeignKey
from .db import db
import datetime


class Like(db.Model):
    __tablename__ = 'likes'
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    videoId = db.Column(db.Integer, ForeignKey('videos.id'), nullable=False)
    created_at = db.Column('created_at', db.DateTime,
                           default=datetime.datetime.now, nullable=False)

    def like_to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'videoId': self.stock_id,
            'created_at': self.created_at,
        }
