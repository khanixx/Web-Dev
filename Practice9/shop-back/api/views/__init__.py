# Switch between levels by changing the import below:
# from api.views.fbv import *        # Level 2
# from api.views.cbv import *        # Level 3
# from api.views.mixins import *     # Level 4
# from api.views.generics import *   # Level 5
from api.views.viewsets import (     # Level 6 (active)
    ProductViewSet,
    CategoryViewSet,
)
