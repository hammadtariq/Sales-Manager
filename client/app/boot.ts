import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core'
import {SalesmanApp} from './app'
import {ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy} from 'angular2/router';
import{HTTP_BINDINGS} from 'angular2/http';

bootstrap(SalesmanApp,[HTTP_BINDINGS,ROUTER_PROVIDERS,provide(LocationStrategy, {useClass: HashLocationStrategy})]);