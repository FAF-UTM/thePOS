package com.thepos.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import javax.validation.constraints.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A Invoice.
 */
@Document(collection = "invoice")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Invoice implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Size(min = 13, max = 13)
    @Field("invoice_nr")
    private String invoiceNr;

    @NotNull
    @Field("total_price")
    private Float totalPrice;

    @NotNull
    @Field("created_date")
    private Instant createdDate;

    @DBRef
    @Field("user")
    private User user;

    @DBRef
    @Field("order")
    @JsonIgnoreProperties(value = { "product", "invoice" }, allowSetters = true)
    private Set<Order> orders = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public Invoice id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getInvoiceNr() {
        return this.invoiceNr;
    }

    public Invoice invoiceNr(String invoiceNr) {
        this.setInvoiceNr(invoiceNr);
        return this;
    }

    public void setInvoiceNr(String invoiceNr) {
        this.invoiceNr = invoiceNr;
    }

    public Float getTotalPrice() {
        return this.totalPrice;
    }

    public Invoice totalPrice(Float totalPrice) {
        this.setTotalPrice(totalPrice);
        return this;
    }

    public void setTotalPrice(Float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Instant getCreatedDate() {
        return this.createdDate;
    }

    public Invoice createdDate(Instant createdDate) {
        this.setCreatedDate(createdDate);
        return this;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Invoice user(User user) {
        this.setUser(user);
        return this;
    }

    public Set<Order> getOrders() {
        return this.orders;
    }

    public void setOrders(Set<Order> orders) {
        if (this.orders != null) {
            this.orders.forEach(i -> i.setInvoice(null));
        }
        if (orders != null) {
            orders.forEach(i -> i.setInvoice(this));
        }
        this.orders = orders;
    }

    public Invoice orders(Set<Order> orders) {
        this.setOrders(orders);
        return this;
    }

    public Invoice addOrder(Order order) {
        this.orders.add(order);
        order.setInvoice(this);
        return this;
    }

    public Invoice removeOrder(Order order) {
        this.orders.remove(order);
        order.setInvoice(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Invoice)) {
            return false;
        }
        return id != null && id.equals(((Invoice) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Invoice{" +
            "id=" + getId() +
            ", invoiceNr='" + getInvoiceNr() + "'" +
            ", totalPrice=" + getTotalPrice() +
            ", createdDate='" + getCreatedDate() + "'" +
            "}";
    }
}
