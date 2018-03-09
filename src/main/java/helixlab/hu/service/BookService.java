package helixlab.hu.service;

import helixlab.hu.domain.Book;
import helixlab.hu.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book findById(int id) {
        return bookRepository.findOne(id);
    }

    public Iterable<Book> findAllBooks() {
        return bookRepository.findAll();
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public void deleteBookById(int id) {
        bookRepository.delete(id);
    }

    public Book updateBookById(int id, Book newBook) {
        Book oldBook = bookRepository.findOne(id);
        oldBook.setName(newBook.getName());
        oldBook.setIsbn(newBook.getIsbn());

        return bookRepository.save(oldBook);
    }
}