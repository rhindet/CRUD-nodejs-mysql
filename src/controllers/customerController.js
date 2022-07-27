const controller = {};
controller.list = (req,res) => {
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer',(err,customers)=>{
            if(err){
                res.json(err);
            }
            console.log(customers);
            res.render('customers',{
                data: customers
            });
        });
    });
};

controller.search = (req,res) => {
    const { id } = req.params;
    const {nombre2} = req.body;
    req.getConnection((err,conn)=>{
        conn.query(`SELECT * FROM customer WHERE nombre = ?`,[nombre2],(err,customers)=>{
            console.log('request body: ',req.body);
            if(err){
                res.json(err);
            }
            
            res.render('filtrado',{
               
                data:customers
            });
            
        });
        
    });
};
controller.search2 = (req,res) => {
    const { id } = req.params;
    const {ApellidoPaterno2} = req.body;
    req.getConnection((err,conn)=>{
        conn.query(`SELECT * FROM customer WHERE ApellidoPaterno = ?`,[ApellidoPaterno2],(err,customers)=>{
            console.log('request body: ',req.body);
            if(err){
                res.json(err);
            }
            
            res.render('filtrado',{
               
                data:customers
            });
            
        });
        
    });
};
controller.search3 = (req,res) => {
    const { id } = req.params;
    const {ApellidoMaterno2} = req.body;
    req.getConnection((err,conn)=>{
        conn.query(`SELECT * FROM customer WHERE ApellidoMaterno = ?`,[ApellidoMaterno2],(err,customers)=>{
            console.log('request body: ',req.body);
            if(err){
                res.json(err);
            }
            
            res.render('filtrado',{
               
                data:customers
            });
            
        });
        
    });
};


controller.edit=(req,res)=>{
    const { id } = req.params;
    req.getConnection((err,conn) => {
        
        conn.query('SELECT * FROM customer WHERE id = ?',[id],(err,customer)=>{
            
            res.render('customer_edit',{
                data:customer[0]
            });
        });
      })
};

controller.update=(req,res)=>{
    const { id } = req.params;
    const newCustomer = req.body;
    console.log( 'new customer:',newCustomer);
    req.getConnection((err,conn) => {
        
        conn.query('UPDATE customer set ? WHERE id = ?',[newCustomer,id],(err,customer)=>{
            console.log(id)
           res.redirect('/');
        });
      })
};



controller.delete = (req,res)=>{
    
  req.getConnection((err,conn)=>{
    const {id} = req.params;
    conn.query('DELETE FROM customer WHERE id = ?',[id],(err,rows)=>{
        
        res.redirect('/');
    });
  })
};
controller.save = (req,res)=>{
  
  req.getConnection((err,conn)=>{
    const data = req.body;
    conn.query('INSERT INTO customer set ?',[data],(err,customer)=>{
        
        res.redirect('/');
    });
  })
};
module.exports = controller;