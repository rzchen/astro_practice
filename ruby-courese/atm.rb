class ATM
  attr_reader :balance

  def initialize(balance)
    @balance = balance
  end
  
  def deposit(amount)
    if amount > 0
      @balance = @balance + amount
    end
  end
  
  def withdraw(amount)
    if amount > 0 && is_enough?(amount)
      @balance = @balance - amount
    end
  end

  private
  def is_enough?(amount)
    amount <= @balance
  end
end