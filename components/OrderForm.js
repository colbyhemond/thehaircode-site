import styles from './form.module.css'

const OrderForm = props => (
        <form name="order" method="POST" className={styles.form} data-netlify="true">
            <input type="hidden" name="form-name" value="order" />
            <div className="form-group row">
                <label htmlFor="firstname" className="col-sm-2">First Name </label>
                <div className="col-sm-4">
                    <input type="text" name="firstname" id="firstname" />
                </div>

                <label htmlFor="lastname" className="col-sm-2">Last Name</label>
                <div className="col-sm-4">
                    <input type="text" name="lastname" id="lastname" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-2">Email</label>
                <div className="col-sm-10">
                    <input type="email" name="email" id="email" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="phone" className="col-sm-2">Phone</label>
                <div className="col-sm-10">
                    <input type="phone" name="phone" id="phone" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="eventdate" className="col-sm-2">Event Date</label>
                <div className="col-sm-4">
                    <input type="date" name="eventdate" id="eventdate" />
                </div>

                <label htmlFor="pickupdate" className="col-sm-2">Pickup Date</label>
                <div className="col-sm-4">
                    <input type="date" name="pickupdate" id="pickupdate" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="quantity" className="col-sm-2">Quantity (in dozens)</label>
                <div className="col-sm-10">
                    <input type="number" name="quantity" id="quantity" step="1" min="1" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="themes" className="col-sm-2">Themes</label>
                <div className="col-sm-10">
                    <input type="text" name="phone" id="phone" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-12">
                    These cookies are not Allergy friendly. They contain wheat, eggs, milk, tree-nuts and are produced in a kitchen that has peanut and soy products.
                </div>
            </div>
            
            <div className="form-group row">
                
                    <div className="col-1">
                        <input type="checkbox" name="disclaimer" id="disclaimer" />
                    </div>
                    <div className="col-11">
                    <label htmlFor="disclaimer" className="col-5">I Understand</label>
                </div>
            </div>
            
            <div className="form-group row">
            <div className="col">
                <label htmlFor="info">Additional Information</label>
                <textarea name="into" id="info" rows="4"></textarea>
                </div>
            </div>

            <button type="submit" className="d-flex mx-auto btn btn-primary">Send</button>
        </form>
);

export default OrderForm;