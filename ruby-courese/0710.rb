class Animal
  def walk
    puts "Walk"
  end
  def eat
    puts "Eat"
  end
end

class Cat < Animal
  
end

class Dog < Animal
  
end

Yo = Cat.new
Yo.walk