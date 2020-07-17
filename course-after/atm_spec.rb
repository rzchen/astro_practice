RS.describe ATM do
  context "存錢功能" do
    it "可以存錢" do
      atm = ATM.new(10)
      atm.deposit(10)
      expect(atm.balance).to(be(20))
    end
    
  end
end