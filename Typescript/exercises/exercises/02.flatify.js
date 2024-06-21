function flatify(tree) {
    // your code
    const result = [];

    function traverse(node) {
        result.push(node.item.name);
        if (node.children) {
            for (const child of node.children) {
                traverse(child);
            }
        }
    }

    for (const node of tree) {
        traverse(node);
    }

    console.log(result);
}


const tree = [
    {
        item: {
            name: 'A'
        },
        children: [
            {
                item: {
                    name: 'A-1'
                },
                children: [{
                    item: {
                        name: 'A-1-1'
                    }
                },
                {
                    item: {
                        name: 'A-1-2'
                    }
                }]
            },
            {
                item: {
                    name: 'A-2'
                },
                children: [
                    {
                        item: {
                            name: 'A-2-1'
                        }
                    }, {
                        item: {
                            name: 'A-2-2'
                        }
                    }
                ]
            }]
    }
];

flatify(tree); // ['A', 'A-1', 'A-1-1', 'A-1-2', 'A-2', 'A-2-1', 'A-2-2'];

/*
Tree: Node[]
Node: {
    item: Item
    children: Node[]
}
Item: {
    name: String
}
*/

