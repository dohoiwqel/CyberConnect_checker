const fs = require('fs')

async function main() {
    const wallets = fs.readFileSync('wallets.txt', 'utf-8').split('\r\n')
    const winners = fs.readFileSync('winners.txt', 'utf-8').split('\r\n')
    
    for(let wallet of wallets) {
        if(winners.includes(wallet)) {
            console.log(wallet)
        }
    }
    
}

main()
