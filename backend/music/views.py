from rest_framework import generics
from .models import Artist, Song, Music
from .serializers import ArtistSerializer, SongSerializer, MusicSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

class ArtistListCreate(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
        return response

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
        return response

class ArtistDetail(generics.RetrieveAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
        return response

class SongListCreate(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
        return response

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
        return response

class SongDetail(generics.RetrieveAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
        return response

class MusicListCreate(generics.ListCreateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
        return response

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
        return response

@api_view(['GET'])
def get_instruments(request):
    instruments = [
        {
            "name": "Piano",
            "description": (
                "The piano is a stringed instrument that was invented in Italy in the early 18th century. "
                "It is played using a keyboard and is widely used in classical, jazz, and popular music. The piano has a "
                "rich history and is known for its versatility, allowing for a wide range of musical expression from soft, "
                "delicate melodies to powerful, dramatic chords. Did you know? The modern piano has 88 keys and is capable "
                "of producing a range of over seven octaves. Famous pianists include Ludwig van Beethoven and Frédéric Chopin."
            ),
        },
        {
            "name": "Violin",
            "description": (
                "The violin is a string instrument that originated in Italy in the 16th century. It is played with a bow "
                "and is a key instrument in classical music, but it is also used in various other music genres. The violin "
                "is known for its expressive sound and is often featured in orchestras, chamber music, and as a solo instrument. "
                "Interesting fact: The most expensive violin ever sold was a Stradivarius, which fetched $15.9 million at auction. "
                "Notable violinists include Niccolò Paganini and Itzhak Perlman."
            ),
        },
        {
            "name": "Guitar",
            "description": (
                "The guitar is a string instrument that is played by plucking or strumming the strings. It has a long history "
                "and is a key instrument in many music genres, including rock, blues, and classical music. The guitar is known "
                "for its versatility, with both acoustic and electric versions offering a wide range of sounds and styles. "
                "Fun fact: The world's largest functioning guitar is 43 feet long and weighs over 2,000 pounds! "
                "Famous guitarists include Jimi Hendrix and Eric Clapton."
            ),
        },
        {
            "name": "Drums",
            "description": (
                "Drums are percussion instruments that form the backbone of many musical genres, from rock and pop to jazz and "
                "classical music. They consist of a variety of drums and cymbals that are played using drumsticks or hands. "
                "Drumming is not only about keeping the beat; it also adds texture and dynamics to the music. Interesting fact: "
                "The earliest evidence of drums dates back to around 5500 BC. Legendary drummers include John Bonham and Buddy Rich."
            ),
        },
        {
            "name": "Flute",
            "description": (
                "The flute is a woodwind instrument that produces sound when air is blown across the opening of the mouthpiece. "
                "It is known for its bright and clear tone, making it a popular choice in orchestras, bands, and as a solo instrument. "
                "Flutes have been used in various cultures around the world for thousands of years. Did you know? The earliest known flutes "
                "are over 40,000 years old and were made from bird bones. Renowned flutists include James Galway and Jean-Pierre Rampal."
            ),
        },
        {
            "name": "Saxophone",
            "description": (
                "The saxophone is a woodwind instrument that was invented by Adolphe Sax in the 1840s. It is commonly used in jazz, classical, "
                "and contemporary music. The saxophone is known for its distinctive sound, which can be smooth and mellow or bright and powerful. "
                "Interesting fact: The saxophone is one of the few instruments that has not been significantly altered since its invention. "
                "Famous saxophonists include Charlie Parker and John Coltrane."
            ),
        },
    ]
    response = Response(data={'status': 'ok', 'instruments': instruments})
    response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
    return response

@api_view(['GET'])
def get_instruments(request):
    instruments = [
        {
            "name": "Piano",
            "description": (
                "The piano is a stringed instrument that was invented in Italy in the early 18th century. "
                "It is played using a keyboard and is widely used in classical, jazz, and popular music. The piano has a "
                "rich history and is known for its versatility, allowing for a wide range of musical expression from soft, "
                "delicate melodies to powerful, dramatic chords. Did you know? The modern piano has 88 keys and is capable "
                "of producing a range of over seven octaves. Famous pianists include Ludwig van Beethoven and Frédéric Chopin."
            ),
        },
        {
            "name": "Violin",
            "description": (
                "The violin is a string instrument that originated in Italy in the 16th century. It is played with a bow "
                "and is a key instrument in classical music, but it is also used in various other music genres. The violin "
                "is known for its expressive sound and is often featured in orchestras, chamber music, and as a solo instrument. "
                "Interesting fact: The most expensive violin ever sold was a Stradivarius, which fetched $15.9 million at auction. "
                "Notable violinists include Niccolò Paganini and Itzhak Perlman."
            ),
        },
        {
            "name": "Guitar",
            "description": (
                "The guitar is a string instrument that is played by plucking or strumming the strings. It has a long history "
                "and is a key instrument in many music genres, including rock, blues, and classical music. The guitar is known "
                "for its versatility, with both acoustic and electric versions offering a wide range of sounds and styles. "
                "Fun fact: The world's largest functioning guitar is 43 feet long and weighs over 2,000 pounds! "
                "Famous guitarists include Jimi Hendrix and Eric Clapton."
            ),
        },
        {
            "name": "Drums",
            "description": (
                "Drums are percussion instruments that form the backbone of many musical genres, from rock and pop to jazz and "
                "classical music. They consist of a variety of drums and cymbals that are played using drumsticks or hands. "
                "Drumming is not only about keeping the beat; it also adds texture and dynamics to the music. Interesting fact: "
                "The earliest evidence of drums dates back to around 5500 BC. Legendary drummers include John Bonham and Buddy Rich."
            ),
        },
        {
            "name": "Flute",
            "description": (
                "The flute is a woodwind instrument that produces sound when air is blown across the opening of the mouthpiece. "
                "It is known for its bright and clear tone, making it a popular choice in orchestras, bands, and as a solo instrument. "
                "Flutes have been used in various cultures around the world for thousands of years. Did you know? The earliest known flutes "
                "are over 40,000 years old and were made from bird bones. Renowned flutists include James Galway and Jean-Pierre Rampal."
            ),
        },
        {
            "name": "Saxophone",
            "description": (
                "The saxophone is a woodwind instrument that was invented by Adolphe Sax in the 1840s. It is commonly used in jazz, classical, "
                "and contemporary music. The saxophone is known for its distinctive sound, which can be smooth and mellow or bright and powerful. "
                "Interesting fact: The saxophone is one of the few instruments that has not been significantly altered since its invention. "
                "Famous saxophonists include Charlie Parker and John Coltrane."
            ),
        },
    ]
    response = Response(data={'status': 'ok', 'instruments': instruments})
    response['Access-Control-Allow-Origin'] = request.headers.get('Origin', '*')
    return response


