db.categories.insert({name: 'test', description: 'test'})
db.categories.insert({apple: 'test', banana: 'test'})


var category1 = new Category({ name: 'mongoose', description: 'mongoose' });
 
    // save model to database
    category1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });




