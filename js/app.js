function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
            // nodeScriptReplace(document.getElementsByTagName("body")[0]);
        })
        .catch(error => {
            console.error('There was a problem loading the content:', error);
            document.getElementById('content').innerHTML = '<p>Sorry, an error occurred while loading the content.</p>';

        });
}

function wireAccordian() {
    alert("wiring accordions")
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

}

function loadNewPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load the help page');
            }
            return response.text();
        })
        .then(data => {
            // Inject the new page's content into the dynamic-content container
            document.getElementById('wordcontent').innerHTML = data;
        })
        .catch(error => console.error(error));
}


function nodeScriptReplace(node) {
    if (nodeScriptIs(node) === true) {
        node.parentNode.replaceChild(nodeScriptClone(node), node);
    } else {
        var i = -1, children = node.childNodes;
        while (++i < children.length) {
            nodeScriptReplace(children[i]);
        }
    }

    return node;
}

function nodeScriptClone(node) {
    var script = document.createElement("script");
    script.text = node.innerHTML;

    var i = -1, attrs = node.attributes, attr;
    while (++i < attrs.length) {
        script.setAttribute((attr = attrs[i]).name, attr.value);
    }
    return script;
}

function nodeScriptIs(node) {
    return node.tagName === 'SCRIPT';
}