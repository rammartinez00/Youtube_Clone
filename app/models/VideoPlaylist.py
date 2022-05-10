from sqlalchemy import Column, ForeignKey
from .db import db


class VideoPlaylist(db.Model):
    __tablename__ = 'videoPlaylists'

    id = db.Column(db.Integer, primary_key=True)
    videoId = db.Column(db.Integer, ForeignKey('videos.id'), nullable=False)
    playlistId = db.Column(db.Integer, ForeignKey(
        'playlists.id'), nullable=False)
