type Item = {
    name?: string;
}

type TreeNode = {
    item?: Item;
    children?: TreeNode[];
}

type Tree = TreeNode[];

const myTree: Tree = [
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

function flatifyTS(tree: Tree): void {
    const result: Array<string> = [];
    
    function traverseTS(node: TreeNode): void {
        result.push(node.item?.name || "none");
        if (node.children) {
            for(const child of node.children){
                traverseTS(child);
            }
        }
    }

    for (const node of tree) {
        traverseTS(node);
    }

    console.log(result);
}

flatifyTS(myTree);