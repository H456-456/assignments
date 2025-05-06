//задание 1
fetch('http://127.0.0.1:5500/sayt/sa3/6/index6.html')
	.then(response => {
		return response.arrayBuffer()
	})
	.then(data => {
		return console.log(data)
	})

  //задание 2
  function palindrome(string) {
    let stringPalindrome = []
    for( let i = 0; i < string.length; i++){
      for (let iFirst = string.length - 1; iFirst >= 0; iFirst--) {
				if (string[i] === string[iFirst] && i != iFirst) {
          if (
						string.slice(i, iFirst + 1) ===
						string
							.slice(i, iFirst + 1)
							.split('')
							.reverse()
							.join('')
							&& i < iFirst
					) {
						stringPalindrome.push(string.slice(i, iFirst + 1))
						i += (iFirst + 1) - i
						break
					}
				}
			}
			stringPalindrome.push(string[i])
    }
    return console.log(stringPalindrome)
  }

  palindrome("аба, Аба, вуву, Абрахам")
