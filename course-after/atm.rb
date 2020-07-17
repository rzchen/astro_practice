class ATM
  def initialize(balance)
    @balance = balance
  end
  def deposit(amount)
    @balance = @balance + amount
  end
end