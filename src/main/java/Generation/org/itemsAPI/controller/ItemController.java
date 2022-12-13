package Generation.org.itemsAPI.controller;

import Generation.org.itemsAPI.controller.dto.ItemDto;
import Generation.org.itemsAPI.repository.entity.Item;
import Generation.org.itemsAPI.service.ItemService;
import Generation.org.itemsAPI.service.ItemServiceMySQL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/item/all")
public class ItemController {

    final ItemServiceMySQL itemService;

    public ItemController(ItemServiceMySQL itemServiceMySQL) {
        this.itemService = itemServiceMySQL;
    }

    @GetMapping
    public Iterable<Item> getItems() {
        return itemService.all();
    }

    @PostMapping
    public Item save(@RequestBody ItemDto itemDto) {
        return itemService.save( new Item(itemDto));
    }

    @GetMapping("/{id}")
    public Item findItemById( @PathVariable Integer id) {
        return itemService.findById( id );
    }

    @PutMapping("/{id}")
    public Item update(@RequestBody ItemDto itemDto, @PathVariable Integer id) {
        Item item = itemService.findById(id);
        item.setName(item.getName());
        item.setDescription(item.getDescription());
        item.setImageUrl(item.getImageUrl());
        return itemService.save(item);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        itemService.delete(id);
    }
}
