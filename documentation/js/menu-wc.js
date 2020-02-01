'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frost-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c67e4b4554f667478eb0472047391195"' : 'data-target="#xs-components-links-module-AppModule-c67e4b4554f667478eb0472047391195"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c67e4b4554f667478eb0472047391195"' :
                                            'id="xs-components-links-module-AppModule-c67e4b4554f667478eb0472047391195"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatastreamComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatastreamComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatastreamCreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatastreamCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatastreamDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatastreamDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatastreamEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatastreamEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureOfInterestComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeatureOfInterestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureOfInterestCreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeatureOfInterestCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureOfInterestDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeatureOfInterestDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureOfInterestEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeatureOfInterestEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoricalLocationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HistoricalLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoricalLocationDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HistoricalLocationDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationCreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservationCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservationDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservationEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservedPropertyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservedPropertyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservedPropertyCreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservedPropertyCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservedPropertyDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservedPropertyDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservedPropertyEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservedPropertyEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SensorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SensorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SensorConnectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SensorConnectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SensorCreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SensorCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SensorDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SensorDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SensorEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SensorEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThingCreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThingCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThingDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThingDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThingEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThingEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c67e4b4554f667478eb0472047391195"' : 'data-target="#xs-injectables-links-module-AppModule-c67e4b4554f667478eb0472047391195"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c67e4b4554f667478eb0472047391195"' :
                                        'id="xs-injectables-links-module-AppModule-c67e4b4554f667478eb0472047391195"' }>
                                        <li class="link">
                                            <a href="injectables/LocationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DatastreamService.html" data-type="entity-link">DatastreamService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeatureOfInterestService.html" data-type="entity-link">FeatureOfInterestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoricalLocationService.html" data-type="entity-link">HistoricalLocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObservationService.html" data-type="entity-link">ObservationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObservedPropertyService.html" data-type="entity-link">ObservedPropertyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SensorService.html" data-type="entity-link">SensorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThingService.html" data-type="entity-link">ThingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link">Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location-1.html" data-type="entity-link">Location</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});