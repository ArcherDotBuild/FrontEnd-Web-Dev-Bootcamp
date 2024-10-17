### Explanation

- `grid-template-columns` (commented out examples): Different ways to define the layout of grid columns, specifying their width in various units.
- `grid-template-rows: 200px 40%;`: Defines the height of the grid rows.
- `gap: 16px;`: Controls the spacing between grid items.

This setup allows you to experiment with different grid configurations by uncommenting the desired lines.

```css
.container {
  /* Defines the element as a CSS grid container, enabling grid layout properties */
  display: grid;

  /* Uncomment this to set three columns, each with a fixed width of 200px */
  grid-template-columns: 200px 200px 200px;

  /* Uncomment this to create a grid with three columns using flexible units:
     - The first column gets 1 part of the space
     - The second column gets 2 parts of the space
     - The third column gets 1 part of the space */
  grid-template-columns: 1fr 2fr 1fr;

  /* Uncomment this to create three equal columns, each taking up 1 fraction of the available space */
  grid-template-columns: repeat(3, 1fr);

  /* Uncomment this to set the first column to a fixed 200px width
     and the next two columns to equal fractions of the remaining space */
  grid-template-columns: 200px repeat(2, 1fr);

  /* Uncomment this to create a grid with one column of 200px width
     followed by two pairs of columns, each of 1 fraction width */
  grid-template-columns: 200px repeat(2, 1fr 1fr);

  /* Creates grid rows with the first row fixed to 200px height
     and the second row taking 40% of the available height */
  grid-template-rows: 200px 40%;

  /* Adds a 16px gap between the grid items, creating spacing between columns and rows */
  gap: 16px;
}
```
