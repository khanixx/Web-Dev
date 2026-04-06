from django.urls import path
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [
    path('api/products/', ProductListAPIView.as_view()),
    path('api/products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('api/categories/', CategoryListAPIView.as_view()),
    path('api/categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    path('api/categories/<int:id>/products/', CategoryProductsAPIView.as_view()),
]
