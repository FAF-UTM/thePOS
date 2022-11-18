package com.thepos.service;

import com.thepos.domain.Invoice;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link Invoice}.
 */
public interface InvoiceService {
    /**
     * Save a invoice.
     *
     * @param invoice the entity to save.
     * @return the persisted entity.
     */
    Invoice save(Invoice invoice);

    /**
     * Updates a invoice.
     *
     * @param invoice the entity to update.
     * @return the persisted entity.
     */
    Invoice update(Invoice invoice);

    /**
     * Partially updates a invoice.
     *
     * @param invoice the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Invoice> partialUpdate(Invoice invoice);

    /**
     * Get all the invoices.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Invoice> findAll(Pageable pageable);

    /**
     * Get all the invoices with eager load of many-to-many relationships.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Invoice> findAllWithEagerRelationships(Pageable pageable);

    /**
     * Get the "id" invoice.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Invoice> findOne(String id);

    /**
     * Delete the "id" invoice.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
