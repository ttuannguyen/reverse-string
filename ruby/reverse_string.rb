def reverse_string(str)
  # type your code in here
  return str
end

puts reverse_string("okay")
# run test: "ruby" + file's name to see console.log


if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!

  # for these tests, run "rspec"
end

# Please add your pseudocode to this file
# And a written explanation of your solution