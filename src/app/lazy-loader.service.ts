import {
  Injectable,
  Compiler,
  Injector,
  Type,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgModuleFactory,
  Inject
} from "@angular/core";



@Injectable()
export class LazyLoaderService {
  // constructor(
  //   private injector: Injector,
  //   private compiler: Compiler,
  //   @Inject(LAZY_WIDGETS)
  //   private lazyWidgets: {
  //     [key: string]: () => Promise<NgModuleFactory<any> | Type<any>>;
  //   }
  // ) {}
  constructor(
    private injector: Injector,
    private compiler: Compiler,
   
  ) {}

  async loadModule(mod: () => Promise<NgModuleFactory<any> | Type<any>>) {
    const ngModuleOrNgModuleFactory = await mod();

    let moduleFactory;

    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      moduleFactory = await this.compiler.compileModuleAsync(
        ngModuleOrNgModuleFactory
      );
    }

    moduleFactory.create(this.injector);
  }

 
}
