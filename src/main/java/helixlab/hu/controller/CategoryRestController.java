package helixlab.hu.controller;

import helixlab.hu.domain.Category;
import helixlab.hu.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryRestController {

    @Autowired
    private CategoryService categoryService;

    @CrossOrigin(origins = "http://localhost")
    @RequestMapping(value = "/categories", method = RequestMethod.GET)
    public Iterable<Category> findAllCategory() {
        return categoryService.findAllCategory();
    }
}

