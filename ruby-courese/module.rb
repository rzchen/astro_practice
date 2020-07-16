module F
  def fly
    puts "module fly"
  end
end

class Cat
  include F
end

Cat.fly