package Generation.org.itemsAPI.repository;

import Generation.org.itemsAPI.repository.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
