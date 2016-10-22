(function(global) {
    var paths = {
        'npm:': '/node_modules/',
    };


    var map = {
        'app': 'app',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        'rxjs': 'npm:rxjs',
        'ng2-sidebar': 'npm:ng2-sidebar/lib/index.js',
        'moment': 'node_modules/moment/moment.js',
        'ng2-bootstrap/ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
        'primeng': 'node_modules/primeng'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        app: { main: 'main.js', defaultExtension: 'js' },
        rxjs: { defaultExtension: 'js' },
        'primeng': { defaultExtension: 'js' }
    };

    var config = {
        paths: paths,
        map: map,
        packages: packages
    };


    System.config(config);
})(this);
