package helixlab.hu.controller;

import helixlab.hu.domain.Book;
import helixlab.hu.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BookRestController {

    @Autowired
    private BookService bookService;


    @CrossOrigin(origins = "http://localhost")
    @RequestMapping(value = "/books", method = RequestMethod.POST)
    public Book createBook(@RequestBody Book book) {
        bookService.save(book);
        return book;
    }
    
    @CrossOrigin(origins = "http://localhost")
    @RequestMapping(value = "/books", method = RequestMethod.GET)
    public Iterable<Book> findAllBooks(){
        return bookService.findAllBooks();
    }

    @CrossOrigin(origins = "http://localhost")
    @RequestMapping(value = "/books/{id}", method = RequestMethod.GET)
    public Book findById(@PathVariable("id") int id) {
        return bookService.findById(id);
    }

    @CrossOrigin(origins = "http://localhost")
    @RequestMapping(value = "/books/{id}", method = RequestMethod.DELETE)
    public void deleteBookById(@PathVariable("id") int id) {
        bookService.deleteBookById(id);
    }

    @CrossOrigin(origins = "http://localhost")
    @RequestMapping(value = "/books/{id}", method = RequestMethod.PUT)
    public Book updateBookById(@PathVariable("id") int id, @RequestBody Book book) {

        return bookService.updateBookById(id, book);
    }
}

