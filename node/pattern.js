const readline = require("readline")
const fs = require("fs")

const rl = readline.createInterface({
    input: fs.createReadStream("./access.big_class_client.log-20201017"),
})

let num = 0
const set = new Set()
rl.on("line", (line) => {
    const arr = line.match(/[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}/)
    if (arr !== null) {
        // console.log(arr[0])
        set.add(arr[0])
        if (set.size >= 100) {
            rl.pause()
        }
    }
})
rl.on("pause", () => {
    fs.writeFileSync(num++ + "mac.txt", Array.from(set).join(","))
    set.clear()
    rl.resume()
})

rl.on("close", () => {
    fs.writeFileSync(num++ + "mac.txt", Array.from(set).join(","))
})
