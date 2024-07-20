from django.urls import path
from .views import ArtistListCreate, ArtistDetail, SongListCreate, SongDetail, MusicListCreate, get_instruments
from .csrf import get_csrf_token

urlpatterns = [
    path('artists/', ArtistListCreate.as_view(), name='artist-list-create'),
    path('artists/<int:pk>/', ArtistDetail.as_view(), name='artist-detail'),
    path('songs/', SongListCreate.as_view(), name='song-list-create'),
    path('songs/<int:pk>/', SongDetail.as_view(), name='song-detail'),
    path('csrf/', get_csrf_token, name='csrf_token'),
    path('music/', MusicListCreate.as_view(), name='music-list-create'),
    path('instruments/', get_instruments, name='get_instruments'),
]
