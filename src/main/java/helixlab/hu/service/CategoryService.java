package helixlab.hu.service;

import helixlab.hu.domain.Category;
import helixlab.hu.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Iterable<Category> findAllCategory() {
        return categoryRepository.findAll();
    }
}

