class String 
  def is_email?
      self.include? "@"
  end
end

p "yuu@5xruby.tw".is_email?