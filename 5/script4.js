var newCalculator = {
	x: 3,
	y: 4,
	sign: "+",
	calculator(){
    return new Promise((resolve, reject) => {
      if (this.sign !== String(this.sign)) {
				reject('не корректно введён знак')
			} else if (
				this.sign !== '+' &&
				this.sign !== '-' &&
				this.sign !== '*' &&
				this.sign !== '/'
			) {
				reject('не корректно введён знак')
			}
      
      switch (this.sign) {
				case '+':
					resolve(this.x + this.y)
					break
				case '-':
					resolve(this.x - this.y)
					break
				case '*':
					resolve(this.x * this.y)
					break
				case '/':
					resolve(this.x / this.y)
					break
				default:
					break
			}
    })
  },
}

newCalculator.calculator().then(function(value){console.log('результат вычисления в объекте:', value)})