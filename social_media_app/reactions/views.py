from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Reaction
from .serializers import ReactionSerializer

class ReactionViewSet(viewsets.ModelViewSet):

    queryset = Reaction.objects.all()
    serializer_class = ReactionSerializer
    permission_classes = [IsAuthenticated]