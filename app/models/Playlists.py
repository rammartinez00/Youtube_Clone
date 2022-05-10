from sqlalchemy import Column, ForeignKey
from .db import db
import datetime


class Playlist(db.Model):
    __tablename__ = 'playlists'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    created_at = db.Column('created_at', db.DateTime,
                           default=datetime.datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True),
                           onupdate=datetime.datetime.now)
