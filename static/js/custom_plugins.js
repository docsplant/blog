function install(hook) {
    hook.mounted(async function () {
        // Move giscuss element into the content element
        // (probably there is an easier way but this just works fine)
        // We need to wait until the element is created before moving though ...
        while (!document.getElementsByClassName('giscus')[0]) {
            console.info("d");
            await new Promise(r => setTimeout(r, 1));
        }
        giscus = document.getElementsByClassName('giscus')[0];
        const content = document.getElementsByClassName("content")[0];
        content.appendChild(giscus);

        // add hr and footer below comments
        var hr = document.createElement('hr');
        content.appendChild(hr);

        const footer = document.createElement("footer");
        footer.innerHTML = [
            '<span>Owned and maintained by <a href="https://docsplant.com" ',
            'target="_blank">docsplant</a> and </span>',
            '<span>proudly published with ',
            '<a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.',
        ].join('');
        content.appendChild(footer);
    });
}

$docsify.plugins = [].concat(install, $docsify.plugins);
