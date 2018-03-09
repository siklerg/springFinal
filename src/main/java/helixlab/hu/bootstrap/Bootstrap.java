package helixlab.hu.bootstrap;

import helixlab.hu.domain.Author;
import helixlab.hu.domain.Book;
import helixlab.hu.domain.Category;
import helixlab.hu.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class Bootstrap implements
        ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        init();
    }

    private void init() {
        Book book = new Book();
        book.setIsbn(String.valueOf(UUID.randomUUID()));
        book.setName("Java course I.");

        Category category = new Category();
        category.setName("Horror");
        category.setShortDescription("Very scary books for brave men");

        book.addCategory(category);

        Author author = new Author();
        author.setName("Béla");
        author.setAge(32);
        author.setEmail("bela@gmail.com");

        book.addAuthor(author);

        bookRepository.save(book);
        
        Book book2 = new Book();
        book2.setIsbn(String.valueOf(UUID.randomUUID()));
        book2.setName("Java course II.");

        Category category2 = new Category();
        category2.setName("Very horror");
        category2.setShortDescription("Very scary books for brave men - part II");

        book2.addCategory(category2);

        Author author2 = new Author();
        author2.setName("Géza");
        author2.setAge(33);
        author2.setEmail("geza@gmail.com");

        book2.addAuthor(author2);

        bookRepository.save(book2);
    
    }
}