/**
 * DDN沙盒
 * wangxm   2019-06-20
 */
const { NodeVM } = require('vm2');
const path = require('path');
const fs = require('fs');

function main()
{
    const options = process.argv;
    const dappPath = options[2];
    const args = options.slice(3);

    const vm = new NodeVM({
        console: "inherit",
        sandbox: {
            launchArgs: args,
            process: process
        },
        require: {
            external: true,
            builtin: ["path", "os", "crypto", "util", "url", "zlib", "asset", "buffer"],    //如果Dapp需要文件读写功能，需要重新定义fs对象
            root: "./"
        },
        wrapper: "none"
    });

    const _entry = path.join(dappPath, "index.js");
    const _code = fs.readFileSync(_entry);

    try
    {
        vm.run(_code, _entry);
    }
    catch (err)
    {
        process.stderr.write(err + "");
    }

    process.stdin.read();
}

main();