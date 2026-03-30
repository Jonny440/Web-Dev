import json
from django.http import JsonResponse
from django.views import View
from .models import Product, Category

class ProductListView(View):
    def get(self, request):
        products = Product.objects.all()
        data = [
            {
                'id': p.id,
                'name': p.name,
                'price': p.price,
                'description': p.description,
                'count': p.count,
                'is_active': p.is_active,
                'category_id': p.category_id,
            }
            for p in products
        ]
        return JsonResponse(data, safe=False)

class ProductDetailView(View):
    def get(self, request, id):
        try:
            p = Product.objects.get(id=id)
            data = {
                'id': p.id,
                'name': p.name,
                'price': p.price,
                'description': p.description,
                'count': p.count,
                'is_active': p.is_active,
                'category_id': p.category_id,
            }
            return JsonResponse(data)
        except Product.DoesNotExist:
            return JsonResponse({'error': 'Product not found'}, status=404)

class CategoryListView(View):
    def get(self, request):
        categories = Category.objects.all()
        data = [{'id': c.id, 'name': c.name} for c in categories]
        return JsonResponse(data, safe=False)

class CategoryDetailView(View):
    def get(self, request, id):
        try:
            c = Category.objects.get(id=id)
            data = {'id': c.id, 'name': c.name}
            return JsonResponse(data)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)

class CategoryProductsView(View):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
            products = Product.objects.filter(category=category)
            data = [
                {
                    'id': p.id,
                    'name': p.name,
                    'price': p.price,
                    'description': p.description,
                    'count': p.count,
                    'is_active': p.is_active,
                    'category_id': p.category_id,
                }
                for p in products
            ]
            return JsonResponse(data, safe=False)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)