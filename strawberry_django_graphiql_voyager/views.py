import os
import json
import strawberry
from django.shortcuts import render
from django.http import Http404, HttpRequest
from django.template import RequestContext, Template
from django.template.loader import render_to_string
from django.template.exceptions import TemplateDoesNotExist
from django.template.response import TemplateResponse
from django.views.generic import TemplateView as GenericTemplateView
from django.conf import settings


class TemplateView(GenericTemplateView):
    template_name = "strawberry_django_graphiql_voyager/voyager.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        graphql_endpoint = settings.GRAPHENE_VOYAGER['GRAPHQL_ENDPOINT']
        context['graphql_endpoint'] = graphql_endpoint
        return context
