package com.thepos.service.impl;

import com.thepos.domain.Product;
import com.thepos.repository.ProductRepository;
import com.thepos.service.ProductService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link Product}.
 */
@Service
public class ProductServiceImpl implements ProductService {

    private final Logger log = LoggerFactory.getLogger(ProductServiceImpl.class);

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product save(Product product) {
        log.debug("Request to save Product : {}", product);
        return productRepository.save(product);
    }

    @Override
    public Product update(Product product) {
        log.debug("Request to update Product : {}", product);
        return productRepository.save(product);
    }

    @Override
    public Optional<Product> partialUpdate(Product product) {
        log.debug("Request to partially update Product : {}", product);

        return productRepository
            .findById(product.getId())
            .map(existingProduct -> {
                if (product.getName() != null) {
                    existingProduct.setName(product.getName());
                }
                if (product.getCode() != null) {
                    existingProduct.setCode(product.getCode());
                }
                if (product.getDescription() != null) {
                    existingProduct.setDescription(product.getDescription());
                }
                if (product.getPrice() != null) {
                    existingProduct.setPrice(product.getPrice());
                }
                if (product.getImage() != null) {
                    existingProduct.setImage(product.getImage());
                }
                if (product.getImageContentType() != null) {
                    existingProduct.setImageContentType(product.getImageContentType());
                }
                if (product.getActive() != null) {
                    existingProduct.setActive(product.getActive());
                }
                if (product.getCreatedDate() != null) {
                    existingProduct.setCreatedDate(product.getCreatedDate());
                }
                if (product.getModifiedDate() != null) {
                    existingProduct.setModifiedDate(product.getModifiedDate());
                }

                return existingProduct;
            })
            .map(productRepository::save);
    }

    @Override
    public Page<Product> findAll(Pageable pageable) {
        log.debug("Request to get all Products");
        return productRepository.findAll(pageable);
    }

    @Override
    public Optional<Product> findOne(String id) {
        log.debug("Request to get Product : {}", id);
        return productRepository.findById(id);
    }

    @Override
    public void delete(String id) {
        log.debug("Request to delete Product : {}", id);
        productRepository.deleteById(id);
    }
}
