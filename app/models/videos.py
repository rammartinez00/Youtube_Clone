from .db import db
from sqlalchemy import ForeignKey
import datetime
from sqlalchemy.sql import func


class Video(db.Model):
    __tablename__ = 'videos'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=True)
    about = db.Column(db.Text)
    video = db.Column(db.String(255), nullable=False)
    thumbnail = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True),
                           default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True),
                           onupdate=func.now(), default=func.now())

    user = db.relationship('User', back_populates='videos')
    comments = db.relationship('Comment', back_populates='video', cascade='all, delete')
    playlists = db.relationship('VideoPlaylist', back_populates='video', cascade='all, delete')

    def video_to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'title': self.title,
            'about': self.about,
            'video': self.video,
            'thumbnail': self.thumbnail,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user': self.user.to_dict(),
        }
