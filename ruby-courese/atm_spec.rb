require './atm.rb'

RSpec.describe ATM do

  let(:atm) { ATM.new(10)}

  context "存錢功能" do
    it "可以存錢" do
      # atm = ATM.new(10)
      atm.deposit(10)
      expect(atm.balance).to be 20
    end
    it "不能存 0 元" do
      # atm = ATM.new(10)
      atm.deposit(0)
      expect(atm.balance).to be 10
    end
    it "不能存負的金額" do
      # atm = ATM.new(10)
      atm.deposit(-10)
      expect(atm.balance).to be 10
    end
  end

  context "領錢功能" do
    it "可以領錢" do
      # atm = ATM.new(10)
      atm.withdraw(5)
      expect(atm.balance).to be 5
    end
    it "不能領負的錢" do
      # atm = ATM.new(10)
      atm.withdraw(-5)
      expect(atm.balance).to be 10
    end
    it "不能領超過餘額" do
      # atm = ATM.new(10)
      atm.withdraw(11)
      expect(atm.balance).to be 10
    end
  end
end