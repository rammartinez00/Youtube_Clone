from .db import db
from sqlalchemy import ForeignKey
import datetime


class Video(db.Model):
    __tablename__ = 'videos'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    about = db.Column(db.Text)
    video = db.Column(db.String(255), nullable=False)
    created_at = db.Column('created_at', db.DateTime,
                           default=datetime.datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True),
                           onupdate=datetime.datetime.now)

    def video_to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'title': self.title,
            'about': self.about,
            'video': self.video,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
