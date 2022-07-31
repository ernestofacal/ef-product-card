# DO-Product-Card

Este es un paquete de prueba de despliegue en NPM

### Facal Ernesto

## Ejemplo

```
import {ProductCard,ProductImage, ProductTitle,ProductButtons} from 'ef-product-card'
```

```
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
          // maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
