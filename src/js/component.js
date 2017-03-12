/**
 * Created by bryangill on 3/12/17.
 */

(function () {

    var register = function(componentRoot, name) {
        var Prototype = Object.create(HTMLElement.prototype);
        var importedDoc = document.currentScript.ownerDocument;

        Prototype.createdCallback = function () {
            var template = importedDoc.querySelector(componentRoot); // get reference to the template;
            // var template = importedDoc.querySelector('template'); // get reference to the template;
            var template_clone = document.importNode(template.content, true); // import the template into the doc to clone;

//            var clickable = template_clone.querySelector('#clickable'); // eample if we had a clickable item
//
//            clickable.addEventListener('click', function () {
//                alert('some clickable thing');
//            })

            var root = this.createShadowRoot();
            root.appendChild(template_clone); // create the shadow root and append the cloned template.

        };

        document.registerElement(name, {
            prototype: Prototype
        });

        // document.registerElement('bike-header', {
        //     prototype: Prototype
        // });

    }

})();